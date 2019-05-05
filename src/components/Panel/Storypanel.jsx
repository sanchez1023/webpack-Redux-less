import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import style from "./Panel.less";
import storyStyle from './StoryPanel.less'

class Storypanel extends Component {

    render() {
        return (


            <Card className={storyStyle.cardPanel}>
                <div>
                    <img className={storyStyle.storyImage} src={require("../../assets/Image 1.png")} />


                    <div className={style.iconDiv}>
                        <div className={style.paneliconDiv}>

                            <div className={style.openlinkDiv}>
                                <img src={require("../../assets/ic_open_in_new_24px.png")} alt="open-link" />
                            </div>

                            <div className={style.copyiconDiv}>
                                <img src={require("../../assets/copy.png")} alt="copy-icon" />
                            </div>
                            <div className={style.shareiconDiv}>
                                <img src={require("../../assets/share.png")} alt="share-icon" />
                            </div>
                            <div className={style.editiconDiv}>
                                <img src={require("../../assets/icons8-menu-vertical-24.png")} alt="edit-icon" />
                            </div>
                        </div>
                    </div>

                    <div className={style.titleDiv}>
                        India is facing a massive skill gap problem with hundreds of engineers..
                </div>
                </div>

            </Card>

        )
    }
}
export default Storypanel;