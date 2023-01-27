import React from 'react'

export default function cardcomponent(props) {
  const {content} = props;
  return (
    <>
    <a href=""></a>
   {
    content.map((el)=>{
return( <a href="" className='content-list'> <h4 className='content-heading'>{el.mainTitle}</h4> <p className='content-subheading'>{el.subText}</p> {el.newarticle && ( <div className='new-tag'>New</div>)}</a>)
    })
   }
   </>
  )
}
