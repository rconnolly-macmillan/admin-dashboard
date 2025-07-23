'use client'
import { use, useEffect, useState } from 'react'
import { Card, CardBody, Col, Row, Table } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { FormCodeType } from '@/app/api/finance-codes/types';

const FinanceCodeDetails = ({
    params,
}: {
    params: Promise<{ code: string }>
}) => {

    const { code } = use(params);
    const [financeCodeData, setFinanceCodeData] = useState<FormCodeType | null>(null);


    useEffect(() => {
        const fetchUrl = '/api/finance-codes/' + code
        console.log(fetchUrl);

        const fetchFinanceCode = async () => {
            try {
                const response = await fetch(fetchUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);

                setFinanceCodeData(data);
            } catch (error) {
                console.error('Error fetching finance code:', error);
            }
        }
        fetchFinanceCode();
    }, []);

    if (!financeCodeData) {
        return (
            <Row style={{ height: '100vh' }} className="align-items-center justify-content-center">
                <Col sm={12} className="text-center">
                    <h4>Loading Finance Code Details...</h4>
                    <Spinner size={'md'} />
                </Col>
            </Row>
        );
    }

    return (
        <>
            <PageBreadcrumb title={`Finance Code: ${financeCodeData.formCode}`} subName="Details" />
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col lg={6} className="d-flex align-items-center justify-content-between">
                                    <h4 className="header-title">Finance Code Details</h4>
                                </Col>
                                <Col lg={6} className="d-flex align-items-center justify-content-end">
                                    <Link href={`/finance-codes/${financeCodeData.formCode}/edit?fc=${financeCodeData.formCode}`} className="text-secondary me-2">
                                        <IconifyIcon icon="fa6-regular:pen-to-square" className="font-20" />
                                    </Link>
                                    <Link href={`/finance-codes/${financeCodeData.formCode}/edit?fc=${financeCodeData.formCode}`} className="text-secondary">
                                        <IconifyIcon icon="fa6-regular:circle-stop" className="font-20" />
                                    </Link>
                                </Col>
                            </Row>
                            <Table className="mb-0">
                                <tbody>
                                    <tr data-id="form-code">
                                        <th>Form Code</th>
                                        <td>{financeCodeData.formCode}</td>
                                    </tr>
                                    <tr data-id="source">
                                        <th>Source</th>
                                        <td>{financeCodeData.source}</td>
                                    </tr>
                                    <tr data-id="budgetary-department">
                                        <th>Budgetary Department</th>
                                        <td>{financeCodeData.budgetDept}</td>
                                    </tr>
                                    <tr data-id="Freehold-code">
                                        <th>Freehold Code</th>
                                        <td>{financeCodeData.freeholdCode}</td>
                                    </tr>
                                    <tr data-id="sub-region">
                                        <th>Sub Region</th>
                                        <td>{financeCodeData.subRegion}</td>
                                    </tr>
                                    <tr data-id="regular-payment-campaign-code">
                                        <th>Regular Payment Campaign Code</th>
                                        <td>{financeCodeData.regularPaymentCampaignCode}</td>
                                    </tr>
                                    <tr data-id="regular-payment-promo-code">
                                        <th>Regular Payment Promo Code</th>
                                        <td>{financeCodeData.regularPaymentPromoCode}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default FinanceCodeDetails;
