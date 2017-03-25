export default function initGame(canvasNode) {
  const ctx = canvasNode.getContext('2d');
  console.log(canvasNode.width, canvasNode.height)
  var centerX = canvasNode.width / 2;
  var centerY = canvasNode.height / 2;
  var radius = 70;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = '#003300';
  ctx.stroke();
  ctx.closePath();
}
