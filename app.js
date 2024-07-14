const App = () => {
    return (
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl text-pink-500 font-bold mb-4"><b>Surprise for Bia!</b></h1>
            <h2><p className="text-xl text-gray-700 mb-6">Hey Bia, you are awesome and deserve all the happiness! Here are some special surprises for you.</p></h2>
            <div className="grid grid-cols-1 gap-4">
                <SurpriseVideo />
                <SurpriseLetter />
                <SurpriseImages />
            </div>
        </div>
    );
};

const SurpriseVideo = () => {
    return (
        <div className="bg-pink-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl text-purple-500 font-semibold mb-2">A Special Video</h2>
            <video controls className="w-full rounded" src="bia.mp4"></video>
        </div>
    );
};

const SurpriseLetter = () => {
    return (
        <div className="bg-purple-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl text-purple-500 font-semibold mb-2">A letter for my <strong>bestie</strong></h2>
            <p className="text-gray-600">Dear Bia,<br/>
                You mean the world to me, and I am so grateful for our friendship. You always bring a smile to my face,
                and I cherish every moment we share. I am truly sorry for my mistakes and any rude behavior. Thank you for being you!<br/>
                with Love,<b> Qaswar Sarfraz</b>
            </p>
        </div>
    );
};

const SurpriseImages = () => {
    return (
        <div className="bg-indigo-100 p-4 rounded-lg shadow">
            <h2 className="text-2xl text-indigo-500 font-semibold mb-2">Our Memories</h2>
            <div className="flex space-x-4">
                <img className="w-64 h-40 rounded object-cover" src="bia1.jpg" alt="Memory 1"/>
                <img className="w-64 h-40 rounded object-cover" src="bia2.jpg" alt="Memory 2"/>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
