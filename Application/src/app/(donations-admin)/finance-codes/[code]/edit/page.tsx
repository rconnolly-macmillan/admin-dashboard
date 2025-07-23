"use client"

import Form from '@/components/Form/Form';
import { Button, Col, Row, Form as BSForm } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import RichTextEditor from './RichTextEditors';
import { FileUploader } from '@/components/FileUploader';
import { FinanceCode } from '../../types';
import * as yup from 'yup';
import { useQuery } from '@/hooks';


const editFinanceCodeSchema = yup.object({
    "Form Code": yup.string().required('Form Code is required'),
    "Source": yup.string().required('Source is required'),
    "Budgetary Department": yup.number().required('Budgetary Department is required'),
    "Campaign Code": yup.string().optional(),
    "Freehold Code": yup.string().required('Freehold Code is required'),
    "Sub Region": yup.string().required('Sub Region is required'),
    "Regular Payment Campaign Code": yup.string().optional(),
    "Regular Payment Promo Code": yup.string().optional(),
    headingOneText: yup.string().optional(),
    subheadingText: yup.string().optional(),
    paragraphText: yup.string().optional(),
});

type EditFinanceCodeFormType = yup.InferType<typeof editFinanceCodeSchema>;

const EditFinanceCode = () => {
    const { setValue, reset, formState: { errors }, register } = useForm<EditFinanceCodeFormType>({
        resolver: yupResolver(editFinanceCodeSchema)
    });

    const [financeCode, setFinanceCode] = useState<string>('');
    const [financeCodeData, setFinanceCodeData] = useState<FinanceCode | null>(null);

    useEffect(() => {
        const { fc: code } = useQuery();
        console.log('Finance Code:', code);
        setFinanceCode(code);
    }, []);

    // console.log('Code from query:', code);


    useEffect(() => {
        if(!financeCode) return;
        const fetchUrl = '/api/finance-codes/' + financeCode
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
    }, [financeCode]);

    const submitAction = () => {
        console.log('Submitted Data:', financeCodeData);
    };

    return (
        // Form to edit finance code details without a modal

        <Form
            onSubmit={submitAction}
            schema={editFinanceCodeSchema}
            defaultValues={financeCodeData || {}}
            initCallback={(methods) => {
                // Initialize form values with fetched data
                if (financeCodeData) {
                    methods.reset(financeCodeData);
                }
            }}
            className="p-3">
            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Form Code">
                        <BSForm.Label>Finance Code</BSForm.Label>
                        <BSForm.Control type="text" placeholder="Insert Form Code" defaultValue={financeCodeData ? financeCodeData["Form Code"] : ""} {...register("Form Code")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors["Form Code"]?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Source">
                        <BSForm.Label>Source</BSForm.Label>
                        <BSForm.Control type="text" placeholder="Insert Source" defaultValue={financeCodeData ? financeCodeData.Source : ""} {...register("Source")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors.Source?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Budgetary Department">
                        <BSForm.Label>Budgetary Department</BSForm.Label>
                        <BSForm.Control type="number" placeholder="Insert Budgetary Department" defaultValue={financeCodeData ? financeCodeData["Budgetary Department"] : ""} {...register("Budgetary Department")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors["Budgetary Department"]?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Campaign Code">
                        <BSForm.Label>Campaign Code</BSForm.Label>
                        <BSForm.Control type="text" placeholder="Insert Campaign Code" defaultValue={financeCodeData ? financeCodeData["Campaign Code"] : ""} {...register("Campaign Code")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors["Campaign Code"]?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Freehold Code">
                        <BSForm.Label>Freehold Code</BSForm.Label>
                        <BSForm.Control type="text" placeholder="Insert Freehold Code" defaultValue={financeCodeData ? financeCodeData["Freehold Code"] : ""} {...register("Freehold Code")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors["Freehold Code"]?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Sub Region">
                        <BSForm.Label>Sub Region</BSForm.Label>
                        <BSForm.Control type="text" placeholder="Insert Sub Region" defaultValue={financeCodeData ? financeCodeData["Sub Region"] : ""} {...register("Sub Region")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors["Sub Region"]?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Regular Payment Campaign Code">
                        <BSForm.Label>Regular Payment Campaign Code</BSForm.Label>
                        <BSForm.Control type="text" placeholder="Insert Regular Payment Campaign Code" defaultValue={financeCodeData ? financeCodeData["Regular Payment Campaign Code"] : ""} {...register("Regular Payment Campaign Code")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors["Regular Payment Campaign Code"]?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <BSForm.Group className="position-relative mb-3" controlId="Regular Payment Promo Code">
                        <BSForm.Label>Regular Payment Promo Code</BSForm.Label>
                        <BSForm.Control type="text" placeholder="Insert Regular Payment Promo Code" defaultValue={financeCodeData ? financeCodeData["Regular Payment Promo Code"] : ""} {...register("Regular Payment Promo Code")} />
                        <BSForm.Control.Feedback type="invalid" tooltip>
                            {errors["Regular Payment Promo Code"]?.message}
                        </BSForm.Control.Feedback>
                    </BSForm.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <RichTextEditor name="headingOneText" label="Heading" />
                </Col>
                <Col sm={12} md={6}>
                    <RichTextEditor name="subheadingText" label="Subheading" />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <RichTextEditor name="paragraphText" label="Paragraph" />
                </Col>
                <Col sm={12} md={6}>
                    <FileUploader />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="text-end">
                    <Button variant="secondary" onClick={() => window.history.back()} className="me-2">Cancel</Button>
                    <Button type="submit" variant="primary">{'Update Finance Code'}</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default EditFinanceCode;

