export default function Footer() {
  return (
    <footer className='w-full mx-auto my-0 p-0'>
      <div className='h-56 py-0 flex flex-row justify-between items-center text-xs'>
        <span className=''>© Kalyn Beach {new Date().getFullYear()}</span>
        <div className='flex flex-row justify-evenly items-center'>
          <a className='inline-block' href='https://github.com/kalynbeach' target='_blank' rel='noopener noreferrer'>GitHub</a>
          <a className='inline-block ml-12' href='https://discordapp.com/channels/@me/KB#8447/' target='_blank' rel='noopener noreferrer'>Discord</a>
          <a className='inline-block ml-12' href='https://twitter.com/kalynbeach' target='_blank' rel='noopener noreferrer'>Twitter</a>
        </div>
      </div>
    </footer>
  )
}