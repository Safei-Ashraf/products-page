export function Modal(id) {
    const modal = document.querySelector('.modal');
    const modalContent = modal.querySelector('.modal-content');
    const content = document.createElement('div');
    content.textContent = id;
    modalContent.appendChild(content);
    return content;
}