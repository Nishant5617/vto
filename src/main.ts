import { bootstrapCameraKit } from "@snap/camera-kit";
(async function name() {
  const cameraKit = await bootstrapCameraKit({
    apiToken:
      "eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzE5MjI2NjQxLCJzdWIiOiI5NDQzYWUwZS1kZGNkLTQyZGMtOThiOS01MDAzNTFlMjNiYzB-U1RBR0lOR34zOGJiNzgzNy1jOGQxLTQxZjktYmRmNC04MGJjZGFiZmY3YjcifQ.2qIkQhBFLn6jPx8U4fEVeEeDBINCXCqU8BdRyQchMGg",
  });

  const liveRenderTarget = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;

  const session = await cameraKit.createSession({ liveRenderTarget });

  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: "user",
    },
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    "80683bf9-51c7-41c4-a758-741e411bf812",
    "16d428f2-94f4-410a-a1b6-6d7a8f573dfb"
  );

  await session.applyLens(lens);
})();
