<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
	import CardFooter from "./ui/card/card-footer.svelte";
    let {name, description, image, alt, location, website, rooms, currency} = $props()

    let test = [1,2]
    let selectedRoomName = $state("")
    let selectedRoom = $derived(rooms.find(room => room.room_type == selectedRoomName))
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
        </Card.Title>
        <div  class="absolute right-5">
            <Select.Root
                onSelectedChange={s => selectedRoomName = s.value}>
                <Select.Trigger class="w-[180px]">
                    <Select.Value placeholder="Room Type" />
                </Select.Trigger>
                <Select.Content>
                    {#each rooms as room}
                        <Select.Item value="{room.room_type}">{room.room_type}</Select.Item>
                    {/each}
                </Select.Content>
              </Select.Root>
        </div>
        <Card.Description>
            {#if selectedRoomName != ""}
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

    <CardFooter class="flex items-center justify-center">

    </CardFooter>


</Card.Root>