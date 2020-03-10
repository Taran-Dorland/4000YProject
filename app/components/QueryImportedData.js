import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'antd';
import QueryTable from './QueryTable';

type Props = {};

export default class QueryShit extends Component<Props>{
    props: Props;

    CLIENTS = [];
    PROGRAMS = [];

    state = {
        importedClients: [],
        importedPrograms: [],
        showData: false,
        buttonText: "Show data"
    };

    getClients = (arr, clients) => {

        var returnArr = [];

        //-2 to remove the totals and blank names
        for (let i = 0; i < clients.length - 2; i++) {
            for (let j = 0; j < clients[i]["Programs"].length; j++) {
                for (let k = 0; k < arr.length; k++) {

                    if (arr[k] == clients[i]["Programs"][j]["Name"] && clients[i]["Programs"][j]["Hours"] > 0) {
                        var returnObj = {};

                        returnObj["Client Name"] = clients[i]["Client Name"];
                        returnObj["Program Name"] = clients[i]["Programs"][j]["Name"];
                        returnObj["Hours"] = clients[i]["Programs"][j]["Hours"];

                        returnArr.push(returnObj);
                    }
                }
            }
        }
        return returnArr;
    };

    updateShit = () => {

        var clients = this.CLIENTS;
        var programs = this.PROGRAMS;

        this.setState({
            importedClients: clients,
            importedPrograms: programs,
            tableData: [
                {
                    "Category": "Anger",
                    "Clients": this.getClients(programs.Anger, clients)
                },
                {
                    "Category": "COG Skills",
                    "Clients": this.getClients(programs.COGSkills, clients)
                },
                {
                    "Category": "Education",
                    "Clients": this.getClients(programs.Education, clients)
                },
                {
                    "Category": "Employment",
                    "Clients": this.getClients(programs.Employment, clients)
                },
                {
                    "Category": "Substance",
                    "Clients": this.getClients(programs.Substance, clients)
                },
                {
                    "Category": "Total",
                    "Clients": this.getClients(programs.Total, clients)
                },
                {
                    "Category": "Other",
                    "Clients": this.getClients(programs.Other, clients)
                }
            ]
        });
    };

    handleData = showData => {
        this.updateShit();
        console.log(this.state.tableData);

        var btnText = "";

        if (this.state.buttonText === 'Show data') {
            btnText = "Hide data";
        } else {
            btnText = "Show data";
        }

        this.setState({
            showData: !this.state.showData,
            buttonText: btnText
        });
    }

    render() {

        this.PROGRAMS = this.props.importedPrograms;
        this.CLIENTS = this.props.importedClients["Clients"];

        return (
            <div>
                {this.state.showData ? <QueryTable dataToShow={this.state.tableData} /> : null}
                <Button onClick={this.handleData} shape="round" type="primary">
                    {this.state.buttonText}
                <Icon type="right" />
                </Button>
            </div>
        );
    }
}