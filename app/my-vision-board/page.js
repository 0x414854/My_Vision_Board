"use client";
import { useRef, useEffect } from "react";
import styles from "@/styles/myVisionBoard.module.css";

export default function MyVisionBoardPage() {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    let startX = 0,
      startY = 0;
    let startWidth = 0,
      startHeight = 0;
    let startDistance = 0;
    let isDragging = false;
    let isPinching = false;

    const getTouchDistance = (touches) => {
      const [t1, t2] = touches;
      const dx = t2.clientX - t1.clientX;
      const dy = t2.clientY - t1.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    /** --- SOURIS --- **/
    function onMouseDown(e) {
      e.preventDefault();
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }
    function onMouseMove(e) {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      startX = e.clientX;
      startY = e.clientY;
      moveCard(dx, dy);
    }
    function onMouseUp() {
      isDragging = false;
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    /** --- TACTILE --- **/
    function onTouchStart(e) {
      if (e.touches.length === 1) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        isPinching = true;
        startDistance = getTouchDistance(e.touches);
        startWidth = card.offsetWidth;
        startHeight = card.offsetHeight;
      }
    }

    function onTouchMove(e) {
      e.preventDefault(); // empêche le scroll et le zoom navigateur

      if (isDragging && e.touches.length === 1) {
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        moveCard(dx, dy);
      } else if (isPinching && e.touches.length === 2) {
        const newDistance = getTouchDistance(e.touches);
        const scale = newDistance / startDistance;
        const newWidth = startWidth * scale;
        const newHeight = startHeight * scale;
        card.style.width = `${newWidth}px`;
        card.style.height = `${newHeight}px`;
      }
    }

    function onTouchEnd(e) {
      if (e.touches.length === 0) {
        isDragging = false;
        isPinching = false;
      }
    }

    function moveCard(dx, dy) {
      const newTop = card.offsetTop + dy;
      const newLeft = card.offsetLeft + dx;
      card.style.top = newTop + "px";
      card.style.left = newLeft + "px";
    }

    /** --- ÉCOUTEURS --- **/
    card.addEventListener("mousedown", onMouseDown);
    card.addEventListener("touchstart", onTouchStart, { passive: false });
    card.addEventListener("touchmove", onTouchMove, { passive: false });
    card.addEventListener("touchend", onTouchEnd);

    return () => {
      card.removeEventListener("mousedown", onMouseDown);
      card.removeEventListener("touchstart", onTouchStart);
      card.removeEventListener("touchmove", onTouchMove);
      card.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <main className={styles.viewport}>
      <section ref={containerRef} className={styles.visionBoardPage}>
        <div ref={cardRef} className={styles.card}></div>
      </section>
    </main>
  );
}
