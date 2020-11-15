import Link from 'next/link';

const people = [
    {v:'car', name:'jhon'},
    {v:'bird', name:'doe'},
    {v:'plane',name:'budi'}
]

export default function Details(){
    return  <div>
        {people.map(e=>(
            <div>
            <Link as={`/${e.v}/${e.name}`} href="/[vehicle]/[person]">
                <a> Navigate to {e.name}'s {e.v}</a>
            </Link>
            </div>
        ))}
    </div>
}