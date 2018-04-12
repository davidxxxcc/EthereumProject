import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';


class RequestRow extends Component {
    state = {
        approveLoading: false,
        finalizeLoading: false
    };
    onApprove = async () => {
        try {
            this.setState({ approveLoading: true });
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.approveRequest(this.props.id)
                .send({
                    from: accounts[0]
                });
            this.setState({ approveLoading: false });
            // Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ approveLoading: false });
        }

    };

    onFinalize = async () => {
        try {
            this.setState({ finalizeLoading: true });
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.finalizeRequest(this.props.id)
                .send({
                    from: accounts[0]
                });
            this.setState({ finalizeLoading: false });
        } catch (err) {
            this.setState({ finalizeLoading: false });
        }
    };

    render() {
        const { Row, Cell } = Table;
        const { id, request, value, approversCount } = this.props;
        const readyToFinalize = request.approvalCount > approversCount / 2;
        return (
            <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
                <Cell>{request.recipient}</Cell>
                <Cell>{request.approvalCount}/{approversCount}</Cell>
                <Cell>
                    {
                        request.complete ? null : (
                            <Button color="green" basic loading={this.state.approveLoading} onClick={this.onApprove}>
                                Approve
                            </Button>
                        )
                    }
                </Cell>
                <Cell>
                    {
                        request.complete ? null : (
                            <Button color="teal" basic loading={this.state.finalizeLoading} onClick={this.onFinalize}>
                                Finalize
                            </Button>
                        )
                    }
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;
