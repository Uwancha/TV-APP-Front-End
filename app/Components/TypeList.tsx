import TypeItem from './TypeItem';
import { HorizontalScrollBox } from './HorizontalScrollBox';
import Link from 'next/link';

const TypeList = ({ types } : { types : any}) => (
  <HorizontalScrollBox sx={{ display:'flex', alignItems:'center', gap:4, backgroundColor:'#161c2f', boxShadow: '1px -29px 48px 20px #161c2f inset', marginTop: 4, marginBottom:8, padding:2,}} >
    {types.map((type: any, index: any) => (
      <Link href={`channel/1`} key={index} style={{color:'white',textDecoration:'none'}}> 
        <TypeItem  name={type} />
      </Link>
    ))}
  </HorizontalScrollBox>
);

export default TypeList;