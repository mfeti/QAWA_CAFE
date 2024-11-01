/* eslint-disable react/prop-types */
function Button({ children, onClick, styles }) {
  return (
    <button
      className={`bg-primary text-white px-4 py-2 rounded-full  transition-all duration-300 ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

{
  /* <Button styles="ring-2 ring-primary bg-gradient-to-r from-primary to-secondary ">
        Coffee And Code
      </Button>
      <Button styles="flex gap-2 mt-5 justify-center items-center">
        Order{" "}
        <span>
          <FaCoffee />
        </span>
      </Button> */
}
