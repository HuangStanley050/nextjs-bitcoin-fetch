import Layout from "../components/layout";
import Fetch from "isomorphic-unfetch";
import Prices from "../components/prices";
/*global fetch*/
const index = (props) => (
    <Layout>
    <div>
   
    <h1>Welcome to BitzPrice</h1>
    <p>Check current bitcoin rate</p>
    <Prices bpi={props.bpi}/>
    </div>
    </Layout>
);

index.getInitialProps = async() => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        bpi: data.bpi
    };
};


export default index;
