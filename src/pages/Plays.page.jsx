import React from 'react';

// component
import Poster from '../components/Poster/poster.component';
import PlaysFilter from '../components/Filters/PlaysFilters.component';

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">    
                <div className="w-full lg:flex lg:flex-row-reverse">  
                    <div className="lg:w-3/4">
                        <h2 className="text-2xl font-bold mb-4">Plays in Ahmedabad</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                subtitle="Telugu -> ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                subtitle="Telugu -> ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                subtitle="Telugu -> ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                subtitle="Telugu -> ₹400"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-3/12 lg:ml-8">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                            <PlaysFilter title="Language" tags={["Tamil", "Telugu", "English"]} />
                            <PlaysFilter title="Categories" tags={["Theatre"]} />
                            <PlaysFilter title="Genres" tags={["Drama", "Comedy", "Historical"]} />
                            <PlaysFilter title="More Filters" tags={["Online Streaming", "Kids Allowed", "Outdoor Events"]} />
                            <PlaysFilter title="Price" tags={["Free", "0-500", "501-2000", "Above 2000"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;
