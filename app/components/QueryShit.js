import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Icon } from 'antd';

type Props = {};

export default class QueryShit extends Component<Props>{
    props: Props;

    CLIENTS = [];
    PROGRAMS = [];

    state = {
        importedClients: [],
        importedPrograms: [],
        showData: false
    };

    getClients = (arr, clients) => {

        var returnArr = [];

        for (let i = 0; i < clients.length; i++) {
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
                    "category": "Anger",
                    "clients": this.getClients(programs.Anger, clients)
                },
                {
                    "category": "COG Skills",
                    "clients": this.getClients(programs.COGSkills, clients)
                },
                {
                    "category": "Education",
                    "clients": this.getClients(programs.Education, clients)
                },
                {
                    "category": "Employment",
                    "clients": this.getClients(programs.Employment, clients)
                },
                {
                    "category": "Substance",
                    "clients": this.getClients(programs.Substance, clients)
                },
                {
                    "category": "Total",
                    "clients": this.getClients(programs.Total, clients)
                },
                {
                    "category": "Other",
                    "clients": this.getClients(programs.Other, clients)
                }
            ]
        });
    };

    handleData = showData => {
        this.updateShit();
        console.log(this.state.tableData);
        this.setState({
            showData: !this.state.showData
        });
    }

    render() {

        this.PROGRAMS = this.props.importedPrograms;
        this.CLIENTS = this.props.importedClients["Clients"];

        return (
            <div>
                <Button onClick={this.handleData} shape="round" type="primary">
                    CALC SHIT
                <Icon type="right" />
                </Button>
                <p>
                    {this.state.showData ? JSON.stringify(this.state.tableData) : null}
                </p>
            </div>
        );
    }
}