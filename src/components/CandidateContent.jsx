/* eslint-disable react/prefer-stateless-function, react/no-multi-comp, react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Loader } from 'semantic-ui-react';

import { fetchCandidates } from '../actions/candidate';

export class CandidateContent extends Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.object,
        fetchCandidates: PropTypes.func.isRequired,
    };

    static defaultProps = {
        data: null,
    };

    componentDidMount() {
        this.props.fetchCandidates();
    }

    render() {
        if (this.props.isFetching || this.props.data == null) {
            return (<Loader active inline="centered" />);
        }

        return (
            <Table style={{ margin: '2rem' }} color="grey" key="grey" inverted>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Party</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        Object.keys(this.props.data).map(((key) => {
                            const element = this.props.data[key];
                            return (
                                <Table.Row key={element.id}>
                                    <Table.Cell>{element.name}</Table.Cell>
                                    <Table.Cell>{element.party_id}</Table.Cell>
                                </Table.Row>
                            );
                        }))
                    }
                </Table.Body>
            </Table>
        );
    }
}

class ConnectedCandidateContent extends Component {
    static propTypes = CandidateContent.propTypes;

    render() {
        return (
            <CandidateContent
                isFetching={this.props.isFetching}
                data={this.props.data}
                fetchCandidates={this.props.fetchCandidates}
            />
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.candidate.isFetching,
    data: state.candidate.data,
});

const mapDispatchToProps = dispatch => ({
    fetchCandidates: () => { dispatch(fetchCandidates()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedCandidateContent);
