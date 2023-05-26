import "./Block.css"

function Block({title, desc, src, alt}) {
  return (
    <article className='article-container'>
        <section className='title-text-container'>
            <h2 className='title-article'>{title}</h2>
            <p className='text-article'>{desc}</p>
            <img src={src} className='img-article' alt={alt}/>
        </section>
    </article>
  )
}

export default Block