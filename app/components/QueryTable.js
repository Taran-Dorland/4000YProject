import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Tag } from 'antd';

type Props = {};

export default class QueryTable extends Component<Props> {
    props: Props;

    state = {

    };


    render() {

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Programs',
                dataIndex: 'Programs',
                key: 'Programs',
            },
            {
                title: 'Program Categories',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'Anger') {
                                color = 'red';
                            } else if (tag === 'COG Skills') {
                                color = 'blue';
                            } else if (tag === 'Education') {
                                color = 'orange';
                            } else if (tag === 'Employment') {
                                color = 'gold';
                            } else if (tag === 'Substance') {
                                color = 'purple';
                            } else if (tag === 'Total') {
                                color = 'cyan';
                            } else if (tag === 'Other') {
                                color = 'green';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
        ];

        var outputData = this.props.dataToShow;
        const data = [];

        function generateTags(name) {

            var tags = [];

            for (let i = 0; i < outputData.length; i++) {
                for (let j = 0; j < outputData[i]["Clients"].length; j++) {

                    if (outputData[i]["Clients"][j]["Client Name"] === name) {
                        if (!tags.includes(outputData[i]["Category"])) {
                            tags.push(outputData[i]["Category"]);
                        }
                    }
                }
            }

            return tags;
        }

        function generatePrograms(name) {

            var programs = [];

            for (let i = 0; i < outputData.length; i++) {
                for (let j = 0; j < outputData[i]["Clients"].length; j++) {

                    if (outputData[i]["Clients"][j]["Client Name"] === name) {
                        if (!programs.includes(outputData[i]["Clients"][j]["Program Name"])) {
                            programs.push(outputData[i]["Clients"][j]["Program Name"] + ": " + outputData[i]["Clients"][j]["Hours"] + " /// ");
                        }
                    }
                }
            }

            return programs;
        }
        
        var names = [];
        var key = 0;

        for (let i = 0; i < outputData.length; i++) {
            for (let j = 0; j < outputData[i]["Clients"].length; j++) {
                var tableObj = {};
                if (!names.includes(outputData[i]["Clients"][j]["Client Name"])) {
                    tableObj["key"] = key;
                    tableObj["name"] = outputData[i]["Clients"][j]["Client Name"];
                    tableObj["Programs"] = generatePrograms(outputData[i]["Clients"][j]["Client Name"]);
                    tableObj["tags"] = generateTags(outputData[i]["Clients"][j]["Client Name"]);
                    data.push(tableObj);
                    names.push(outputData[i]["Clients"][j]["Client Name"]);
                    key++;
                }
            }
        }

        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}