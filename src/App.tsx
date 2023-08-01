import React from 'react';

const App = () => {
    return (
        <div>
            Hello
        </div>
    );
}
type MessageType = {
    message: string
}

function HelloMessage(props: MessageType) {
    return <h1>{props.message}</h1>
}

const ByeMessage: React.FC<MessageType> = (props) => {
    return <h1>{props.message}</h1>
}
export default App;
