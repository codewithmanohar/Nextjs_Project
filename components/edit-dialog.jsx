import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import useFoodStore from "@/Store/useFoodStore"
import { Trash } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { toast } from "react-toastify"
import { Label } from "./ui/label"
import { Input } from "./ui/input"

export function DeleteDialog({ id }) {
    const { removeRecipe } = useFoodStore();
    const router = useRouter();

    const handleDelete = async () => {
        const promise = removeRecipe(id);
        toast.promise(promise, {
            pending: "Deleting your Recipe...",
            success: "Recipe deleted successfully! 🎉",
            error: "Something went wrong ❌"
        });

        const success = await promise;
        if (success)
            router.push("/");
        else
            console.error("Recipe not deleted. An error occurred.");
    }
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-auto">
                        Edit Profile
                    </Button> 
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your here. Click save when you&apos; done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue="Aarav"/>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Profile Link</Label>
                            <Input id="profile-img" name="profile-img" defaultValue="https://google.com"/>
                        </div>
                    </div>

                    <DialogFooter >
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button variant="outline" className="w-full sm:w-auto">
                            Save
                        </Button> 
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
