import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import style from "./Panel.less";

class Panel extends Component {

    render() {
        return (


            <Card className={style.cardPanel}>
                <img src={require("../assets/0 (1).png")} />
                <div className={style.iconDiv}>
                    <div className={style.paneliconDiv}>

                        <div className={style.openlinkDiv}>
                            <img src={require("../assets/ic_open_in_new_24px.png")} alt="open-link" />
                        </div>
                        <div className={style.editiconDiv}>
                            <img src={require("../assets/ic_edit_24px.png")} alt="edit-icon" />
                        </div>
                        <div className={style.copyiconDiv}>
                            <img src={require("../assets/copy.png")} alt="copy-icon" />
                        </div>
                        <div className={style.shareiconDiv}>
                            <img src={require("../assets/share.png")} alt="share-icon" />
                        </div>
                    </div>
                </div>

                <div className={style.titleDiv}>
                    <p>India is facing a massive skill gap problem with hundreds of engineers...</p>
                </div>
                <div className={style.cardextendDiv}>
                    <div className={style.cardExtend}>
                    </div>
                </div>
            </Card>

        )
    }
}
export default Panel;