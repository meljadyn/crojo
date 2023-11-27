import { Button } from "@/components/ui/button.tsx";
import { PlusIcon } from "@radix-ui/react-icons";
import {useState} from "react";
import {CreateModForm} from "@/components/CreateModForm.tsx";

const CreateModButton = ({ descriptor }) => {
    const [createDialogueOpen, setCreateDialogueOpen] = useState(false);
    const createStat = () => {
        setCreateDialogueOpen(true)


    }

    return (
        <>
            <Button variant="outline" size="icon" onClick={createStat}><PlusIcon /></Button>

            { createDialogueOpen && (
                <CreateModForm />
            )}
        </>
    );
};

export default CreateModButton;