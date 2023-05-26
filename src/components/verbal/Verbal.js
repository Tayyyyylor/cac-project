import Block from '../block/Block'

function Verbal() {
    const blocksData = [
        {
            src:'',
            title:'Langage non-verbal',
            alt:'Image de description',
            desc:'lorem ipsum',
        },
        {
            src:'',
            title:'Langage verbal',
            alt:'Image de description',
            desc:'lorem ipsum',
        },
        {
            src:'',
            title:'Langage écrit',
            alt:'Image de description',
            desc:'lorem ipsum',
        },
    ]
    
  return (
    <>
    {blocksData.slice(0, 3).map((block, index) => (
        <Block src={block.src}
        title={block.title}
        alt={block.alt}
        desc={block.desc}
        key={index}
        />
        ))}
        </>
  )
}

export default Verbal