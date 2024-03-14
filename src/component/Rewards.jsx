import WheelComponent from "react-wheel-of-prizes";

function Rewards() {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
  ];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="w-full h-svh absolute">
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <div className="fixed z-50 w-full flex justify-center">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="white"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={290}
          upDuration={500}
          downDuration={1000}
          fontFamily="Arial"
        />
      </div>
    </div>
  );
}

export default Rewards;
