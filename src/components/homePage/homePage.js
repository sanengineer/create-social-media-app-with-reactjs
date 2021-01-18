import React,{Component} from "react";
import {Row,Col,Container,Image,} from "react-bootstrap"; 
import UsersServices from "../../services/users-service";

//related to redux
import { connect } from "react-redux";
import { fetchSuggestedUsers } from "../../actions/suggestedUsersAction";
import { fetchPublicUsers } from "../../actions/publicUsers";

// Importing assets
import noPict from "../../assets/icons/user.png";
import "./homePage.css"

// import component
import { Feeds } from "../../components/public-feeds";
import { SuggestedAccounts } from "../../components/suggested-accounts";


class HomePage extends Component{
    state={
        token:localStorage.jwtToken,
        me:{}
    }
    componentDidMount() {
        this.props.dispatch(fetchSuggestedUsers());
        this.props.dispatch(fetchPublicUsers());
        UsersServices.me(this.state.token).then((result)=>{
            this.setState({me:result.data})
            // console.log(result.data)
        })

      }

    render(){
        const me = this.state.me;
        const { publicusers, suggestedusers} = this.props;
        // let me = this.state.me;
        let profileSrc ;
        if(me.avatar){
            profileSrc=me.avatar
        }else{
            profileSrc = noPict;
        }
        return(
            <div>
                <Container className="py-2 top-main" >
                    <Row>
                        <Col md={8}>
                            <Feeds publicusers={publicusers}/>
                        </Col>
                        <Col sm={4}>
                           <div className="d-flex mb-5">
                                <Image className="rounded-circle" src={profileSrc} width={100} height={100}/>
                                <div className="ml-4">
                                    <h3><strong>{me.username}</strong></h3>
                                    <h4 className="text-secondary">{me.lastname}</h4>
                                </div>
                           </div>
                           <p>
                               {/* dummy Bio */}
                               *Dummy Bio* 
                               Hi, my name is name. I jobs as employer, live in island.
                               I love eat, drink, sleep at bathroom.
                           </p>
                           <hr/>
                           <p>Suggested Account :</p>
                          <SuggestedAccounts 
                          suggestedusers={suggestedusers}/>
                          
                          <hr></hr>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    publicusers: state.publicusers.publicusers,
    suggestedusers: state.suggestedusers.suggestedusers,
});

export default connect(mapStateToProps)(HomePage);
  



