import clsx from "clsx";

type RadialBlurProps = {
  className?: string;
  blurClassName?: string;
};

const RadialBlur = ({ className, blurClassName }: RadialBlurProps) => {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute left-1/2 -translate-x-1/2",
        "h-[350px] w-[700px] rounded-full opacity-90 blur-[120px]",
        className
      )}
    >
      <div
        className={clsx(
          `absolute left-1/2 h-[350px] w-[700px]
           -translate-x-1/2 rounded-full opacity-90 blur-[120px]`,
          blurClassName
        )}
        style={{
          background: `radial-gradient(
            circle,
            rgba(109,59,255,0.95) 0%,
            rgba(91,46,255,0.75) 25%,
            rgba(70,30,200,0.45) 50%,
            rgba(0,0,0,0) 75%
          )`,
        }}
      />
    </div>
  );
};

export default RadialBlur;
