import {Howl} from 'howler';
import { useState } from 'react';
import select1 from './assets/soundfx/ui/select1.mp3'
import select2 from './assets/soundfx/ui/select2.mp3'
import select3 from './assets/soundfx/ui/select3.mp3'
import click1 from './assets/soundfx/ui/click1.mp3'
import stomp1 from './assets/soundfx/ui/stomp1.mp3'
import stomp2 from './assets/soundfx/ui/stomp2.mp3'

class SoundManager{

    sourceMap: Record<string, string> = {
        select1: select1,
        select2: select2,
        select3: select3,
        click1: click1,
        stomp1: stomp1,
        stomp2: stomp2
    }
    soundMap!: Record<string, Howl>;

    constructor(){
        this.setupAll();
    }
    setupAll = () => {
        this.soundMap = Object.fromEntries(Object.entries(this.sourceMap).map(([sound, srcPath])=>[ sound, 
            new Howl ({
                src: [srcPath],
                format: ['mp3'],
                // html5: true,
                preload:true,
                volume: 1.5
            })
        ]))
    }

    playSound = (sound: string) => {
        this.soundMap[sound].play();
    }  
}

//singleton instance
const soundManager = new SoundManager();
export default soundManager;
