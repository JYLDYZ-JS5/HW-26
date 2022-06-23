import styled from 'styled-components'
const Loading = () => {
    return <Spinner></Spinner>
}

const Spinner = styled.div`
height: 90px;
width: 90px;
border-left: 5px solid #049fca;
border-bottom: 5px solid #86ff88;
border-right: 5px solid #f7ff05;
border-top: 5px solid transparent;
border-radius: 50%;
animation: spinner 1s linear infinite;
text-align: center;
@keyframes spinner {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
`
export default Loading