/**
 * Adds 3D hover effect to card elements
 * This script adds event listeners to elements with the card-3d-effect class
 * to create a dynamic 3D rotation effect based on mouse position
 */

export function initialize3DCardEffects() {
  const cards = document.querySelectorAll('.card-3d-effect');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e: Event) => handleMouseMove(e as MouseEvent));
    card.addEventListener('mouseleave', (e: Event) => handleMouseLeave(e as MouseEvent));
  });
}

function handleMouseMove(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  
  // Calculate mouse position relative to the card
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  // Calculate rotation values based on mouse position
  // The rotation is more pronounced when the mouse is near the edges
  const rotateY = ((x / rect.width) * 2 - 1) * 10; // -10 to 10 degrees
  const rotateX = ((y / rect.height) * 2 - 1) * -10; // 10 to -10 degrees (inverted)
  
  // Apply the rotation
  card.style.setProperty('--rotate-y', `${rotateY}deg`);
  card.style.setProperty('--rotate-x', `${rotateX}deg`);
}

function handleMouseLeave(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  
  // Reset rotation when mouse leaves the card
  card.style.setProperty('--rotate-y', '0deg');
  card.style.setProperty('--rotate-x', '0deg');
}