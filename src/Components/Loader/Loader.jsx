
import { Circles, Triangle } from 'react-loader-spinner'


export default function Loader() {
  return (
    <>
      <div className=" container mx-auto h-80 flex justify-center items-center" >
            <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
        </div>
      </>
  )
}
