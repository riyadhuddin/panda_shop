import Header from "./Header";
import Footer from "./Footer";
import {PropsWithChildren} from "react";
export default function Layout({children}: PropsWithChildren<any>) {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}