import useDynamicTitle from "../hooks/useDynamicTitle"
import useFetch from "../hooks/useFetch"
import { WizardSelection } from "../components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const WizardPage = ({apiPath, title}) => {

    //Pre Settings
    useDynamicTitle(title);

    //Constants
    const fetchedData = useFetch(`${import.meta.env.VITE_APP_API_URL}${apiPath}?api_key=${import.meta.env.VITE_APP_API_KEY}`);
    const [localData, setLocalData] = useState([]);
    const [wizardStep, setWizardStep] = useState(0);

    //Constants for data
    const [selectedItems, setSelectedItems] = useState([]);
    const [allSelectedItems, setAllSelectedItems] = useState([]);

    const navigation = useNavigate();

    //Hooks
    useEffect(()=>{
        if(fetchedData.data && wizardStep == 0){
            setLocalData(fetchedData.data.genres);
        }
        else{
            setLocalData(fetchedData.data);
        }
        setSelectedItems([]);
    }, [fetchedData.data]);


    //Event Handlers
    function handleNextButtonAction(){
        if(wizardStep==0){
            fetchedData.setUrl(`${import.meta.env.VITE_APP_API_URL}configuration/languages?api_key=${import.meta.env.VITE_APP_API_KEY}`);
            setWizardStep(1);
        }
        else if(wizardStep==1){
            navigation("/movies/suggest/result", {state:{apiPath: "discover/movie", title: "Suggestion Results", data: allSelectedItems}} );
        }
    }

    function handleCheckBoxClick(id, title){
        const data = {
            id: id,
            type: wizardStep?"Language":"Genre",
            data: title
        };
        setSelectedItems((prev) => prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]);
        setAllSelectedItems((previous) => previous.includes(title) ? previous.filter((newT) => newT !== title) : [...previous, data]);
    }

    return(
        <main>
            <div className="flex flex-row justify-between mb-4 items-center">
                <h2 className="text-2xl block dark:text-white">{wizardStep ? "Select a Language" : "Select upto 5 Genres"}</h2>
                <button className="text-sm font-medium text-center text-white bg-primary-800 rounded-lg hover:bg-primary-400 focus:outline-none dark:bg-primary-800 dark:hover:bg-primary-1000 disabled:hover:bg-gray disabled:bg-gray" onClick={handleNextButtonAction}>{wizardStep? "Suggest" :"Next"}</button>
            </div>
                <ul class="grid w-full gap-6 md:grid-cols-3">
                    {localData && localData.map(
                        (data) => <WizardSelection
                                    id={Math.floor(Math.random())}
                                    title={wizardStep?data.english_name:data.name}
                                    type={wizardStep?"language":"genre"}
                                    onClick={()=>handleCheckBoxClick(wizardStep ? data.iso_639_1 : data.id , wizardStep ? data.english_name : data.name)}
                                    isChecked={selectedItems.includes(wizardStep?data.english_name:data.name)}/>)
                    }
                </ul>
        </main>
    );

}