import { useState } from "react";
import { Button, Card, Input } from "reactstrap";

const EditableTextBox = () => {
    const [isLocked, setIsLocked] = useState(true);
    const [textValue, setTextValue] = useState('EditableTextBox');
    const [formText, setFormText] = useState(textValue);

    const handleOnChange = (e) => {
        setFormText(e.target.value);
    }

    const handleEditClick = () => {
        setIsLocked(false);
    }

    const handleSaveClick = () => {
        setTextValue(formText);
        setIsLocked(true);
    }

    const handleCancelClick = () => {
        setFormText(textValue);
        setIsLocked(true);
    }

    return (
        <>
            <Card className="w-25 mx-auto text-center">
                {isLocked ? (
                    <>
                        <p className="my-2 mx-2 me-auto">{textValue}</p>
                        <Button color="primary" onClick={handleEditClick}>Edit</Button>
                    </>
                ) : (
                    <>
                        <Input value={formText} onChange={handleOnChange} />
                        <Button color="secondary" onClick={handleSaveClick}>Save</Button>
                        <Button color="danger" onClick={handleCancelClick}>Cancel</Button>
                    </>
                )}
            </Card>
        </>
    )
}

export default EditableTextBox;