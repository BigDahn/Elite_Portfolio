interface Heading {
  text: string;
}

const Headings = ({ text }: Heading) => {
  return (
    <div className="flex items-center">
      <div className="bg-yellow-500 w-19" />
      <p className="jost text-[15px] font-medium leading-[170%] tracking-[30%]">{text}</p>
    </div>
  )
}

export default Headings
