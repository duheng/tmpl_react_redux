import style from './style'

export const Special= props => {
  const { data } = props
  console.log('Special++++>',data)

  return <div className='Special'>
           <div className='Special-Title'>低价专区</div>
           <div className='Special-Wrap'>
              {
                Object.keys(data).map(item=>{
                  return <div className='Special-Item'>
                            <img src={data[item].imageUrl} />
                            <div className='Special-Item-Title'>
                              <span>#</span>
                              <span>{data[item].title}</span>
                            </div>
                        </div>
                })
              }
           </div>
         </div>
}

export default Special
