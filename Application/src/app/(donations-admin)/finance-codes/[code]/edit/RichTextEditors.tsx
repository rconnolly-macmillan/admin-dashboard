'use client';
import {Card, CardBody} from 'react-bootstrap';
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), {ssr: false});

interface RichTextEditorProps {
    name: string;
    label: string;
    callback?: any;
}

const RichTextEditor = ({name, label, callback}: RichTextEditorProps) => {
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{color: []}],
            [{header: [false, 1, 2, 3, 4, 5, 6]}],
            [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
            [{align: []}],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    }
    return (
        <Card>
            <CardBody>
                <h4 className="header-title mb-3">{label}</h4>
                <ReactQuill modules={modules} defaultValue={""} theme="snow" onChange={value => callback(name, value)} />
            </CardBody>
        </Card>
    )
}

export default RichTextEditor;