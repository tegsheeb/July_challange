import React from "react";
import { useQuery } from '@apollo/client';
import { Spinner } from "../../components";
import { GET_ALL_RESOURCE_TYPE } from "./queries/resourceType";
import ResourceBySingleType from './ResourceBySingleType';
import "./styles.scss";
import { type } from "os";
var sortResources = function (types, resources) {
    var sortedData = [];
    for (var i = 0; i < types.length; i++) {
        var type_1 = [];
        for (var j = 0; j < resources.length; j++) {
            if (resources[j]['resourceType'] === types[i]) {
                console.log('this should be 12 times only');
                console.log(resources[j]);
                type_1.push(resources[j]);
                console.log('pushed', i, j);
            }
        }
        sortedData.push(type_1);
    }
    var sortedResult = [];
    for (var i = 0; i < types.length; i++) {
        sortedResult[i] = { 'type': types[i], 'data': sortedData[i] };
    }
    return sortedResult;
};
var Resources = function (_a) {
    var resources = _a.resources, pagesToDisplay = _a.pagesToDisplay;
    var _b = useQuery(GET_ALL_RESOURCE_TYPE), loading = _b.loading, error = _b.error, _c = _b.data, data = _c === void 0 ? { resourceTypes: { edges: [] } } : _c;
    console.log('error', error);
    var types = data.resourceTypes.edges.map(function (type) { return type.node.name; });
    if (loading)
        return React.createElement(Spinner, null);
    console.log(types);
    var sortedData = sortResources(types, resources);
    console.log(sortedData);
    return ({ sortedData: [].map(function (ele) { return (React.createElement(ResourceBySingleType, { type: type, resources: ele.data, total: ele.data.length, pagesToDisplay: pagesToDisplay })); }) });
};
export default Resources;