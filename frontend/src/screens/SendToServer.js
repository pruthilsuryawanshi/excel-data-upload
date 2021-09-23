

function SendToServer({ sendJSON, showThanks }) {
    return (
        <div className="main">
            <button onClick={() => { sendJSON(); showThanks() }}>Submit</button>
        </div>
    );
}

export default SendToServer;