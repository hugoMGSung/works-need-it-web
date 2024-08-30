function MyButton(props){
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true)},
        isClicked ? '클릭했어!!' : '여기를 클릭하세요!'
    )
}

const domContainer = document.querySelector('#root');
//ReactDom.render(React.createElement(MyButton), domContainer);
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(MyButton));