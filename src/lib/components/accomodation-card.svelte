<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
    import IconWeb from 'virtual:icons/mdi/web';
    import type { Selected } from 'bits-ui';
    let {name, description, image, alt, location, website, rooms, currency} : {
        name: string,
        description: string,
        image: string,
        alt: string,
        location: string,
        website: string,
        rooms: [{ room_type: string, room_min_cost: number, room_max_cost: number }],
        currency: string}
        = $props()

    let selectedRoomName: Selected<string> = $state({value: ""})
    let selectedRoom = $derived(rooms.find(room => room.room_type == selectedRoomName.value))
    let currFormatter = new Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 2,
        style: 'currency',
        currency: currency
    })
</script>

<Card.Root class="box-border relative mb-3 min-h-40 max-h-full">
    <Card.Header class="w-full relative">
        <Card.Title>
            {name}
            <div class="absolute right-5 top-5 w-1/2">
                <Select.Root
                    bind:selected={selectedRoomName}>
                    <Select.Trigger class="w-[180px] float-right">
                        <Select.Value placeholder="Room Type" />
                    </Select.Trigger>
                    <Select.Content>
                        {#each rooms as room}
                            <Select.Item value={room.room_type}>{room.room_type}</Select.Item>
                        {/each}
                    </Select.Content>
                  </Select.Root>
            </div>
        </Card.Title>
        
        <Card.Description class="w-1/2">
            {#if selectedRoomName.value !== "" && selectedRoom}
                {currFormatter.format(selectedRoom.room_min_cost)}/night - {currFormatter.format(selectedRoom.room_max_cost)}/night
            {:else}
                {currFormatter.format(rooms.reduce((prev, curr) => prev.room_min_cost < curr.room_min_cost ? prev : curr).room_min_cost)}/night - 
                {currFormatter.format(rooms.reduce((prev, curr) => prev.room_max_cost > curr.room_max_cost ? prev : curr).room_max_cost)}/night
            {/if}
                
        </Card.Description>
        <hr/>
    </Card.Header>
    <Card.Content class="">
        <img src={image} alt={alt} class="object-cover h-52 w-full"/>
        <Card.Description>
            {location}
        </Card.Description>
        <p class="pt-5">
            {description}
        </p>
    </Card.Content>

    <Card.Footer class="">
        <a href={website}><IconWeb class="text-xl text-gray-700"/></a>
    </Card.Footer>


</Card.Root>