export default function initGame(canvasNode) {
  const ctx = canvasNode.getContext("2d");
  let drawing = [];
  canvasNode.addEventListener("mousemove", handleMouseMove);
  var isDrawing = false;
  canvasNode.addEventListener("mousedown", handleMouseDown);
  canvasNode.addEventListener("mouseup", handleMouseUp);

  function handleMouseMove(event) {
    const { left, top } = canvasNode.getBoundingClientRect();
    if (isDrawing) {
      drawing.push([event.clientX - left, event.clientY - top]);
      render();
    }
  }

  function handleMouseDown(event) {
    isDrawing = true;
  }

  function handleMouseUp(event) {
    isDrawing = false;
  }

  const render = () => {
    for (let pointIndex = 1; pointIndex < drawing.length; pointIndex++) {
      let [currX, currY] = drawing[pointIndex];
      let [prevX, prevY] = drawing[pointIndex - 1];
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(currX, currY);
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    }
  };
}
