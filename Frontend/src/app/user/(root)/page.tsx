import Footer from "@/components/Footer";
import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

const page = () => {
    return (
        <div className='min-h-screen'>
            <div className="max-w-[1800px] mx-auto p-4">
                <Header></Header>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <EditorPanel></EditorPanel>
                    <OutputPanel></OutputPanel>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;