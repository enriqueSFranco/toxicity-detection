import Message from "../Message"

export const StreamMessages = () => {
  return (
    <section className='dark:bg-white/5 w-full h-full overflow-y-auto flex flex-col gap-2 rounded-md p-2 font-extralight'>
      <Message
        username="kike sfranco"
        message={"hello world"}
        prediction={false}
      />
    </section>
  )

}
