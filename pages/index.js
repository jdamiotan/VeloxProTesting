import Content from '../components/dashContent';
import Header from '../components/header';
import LeftNavbar from '../components/leftNavBar';

export default function Home(){
    return(
        <>
            {/* <Header /> */}
            <LeftNavbar />
            <Header />
            <Content />
        </>
    );
}