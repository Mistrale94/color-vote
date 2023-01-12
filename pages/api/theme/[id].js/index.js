import prisma from '../../../lib/prisma';

export default function PostPage(props) {

    return (
        <>
            <div>
               
                <h1>{props.name}</h1>
                <h5>{props.attendees}</h5>
            </div>
        </>
    )
}