"use client"
import { Row, Col, Card, Table, CardBody } from 'react-bootstrap';
import Link from 'next/link';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { useEffect, useState } from 'react';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import Spinner from '@/components/Spinner';
import { FormCodeType } from '@/app/api/finance-codes/types';

const FinanceCodes = () => {
	const [financeCodes, setFinanceCodes] = useState<Array<FormCodeType>>([]);

	useEffect(() => {
		fetch('/api/finance-codes', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setFinanceCodes(data);
			})
			.catch((error) => {
				console.error('Error fetching finance codes:', error);
			}
		);
	},[]); 

	if (!financeCodes) {
        return (
            <Row style={{ height: '100vh' }} className="align-items-center justify-content-center">
                <Col sm={12} className="text-center">
                    <h4>Loading Finance Codes...</h4>
                    <Spinner size={'md'} />
                </Col>
            </Row>
        );
    }

	return (
		<Card>
			<CardBody className="table-responsive">
				<h4 className="header-title">Finance Codes</h4>

				<Table className="mb-0">
					<thead>
						<tr>
							<td>Form Code</td>
							<td>Source</td>
							<td>Budgetary Department</td>
							<td>Freehold Code</td>
							<td>Sub Region</td>
							<td>Regular Payment Campaign Code</td>
							<td>Regular Payment Promo Code</td>
						</tr>
					</thead>
					<tbody>
						{financeCodes.map((record, index) => {
							return (
								<tr key={index.toString()}>
									<th scope="row">{record.formCode}</th>
									<td>{record.source}</td>
									<td>{record.budgetDept}</td>
									<td>{record.freeholdCode}</td>
									<td>{record.subRegion}</td>
									<td>{record.regularPaymentCampaignCode}</td>
									<td>{record.regularPaymentPromoCode}</td>
									<td>
										<Link id={`view-${record.formCode}`} href={`/finance-codes/${record.formCode}`} className="text-secondary" title={`View Details of ${record.formCode}`}>
											<IconifyIcon icon="fa6-regular:eye" className="font-18" />
										</Link>
									</td>
									<td>
										<Link href={`/finance-codes/${record.formCode}/edit?fc=${record.formCode}`} className="text-secondary">
											<IconifyIcon icon="fa6-regular:pen-to-square" className="font-18" />
										</Link>
									</td>
									<td>
									<Link href={`/finance-codes/${record.formCode}/edit?fc=${record.formCode}`} className="text-secondary">
                                        <IconifyIcon icon="fa6-regular:circle-stop" className="font-18" />
                                    </Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</CardBody>
		</Card>
	);
};



const FinanceCodesTable = () => {
	return (
		<>
			<PageBreadcrumb title="All Finance Codes" subName="All Finance Codes" />

			<Row>
				<Col xl={12}>
					<FinanceCodes />
				</Col>
			</Row>
		</>
	);
};

export default FinanceCodesTable;
