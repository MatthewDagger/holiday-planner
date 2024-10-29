<script lang="ts">
    import * as Card from "$lib/components/ui/card";
	import CardFooter from "./ui/card/card-footer.svelte";
    let {name, description, image, alt, location, website, price} = $props()

    let currFormatter = new Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 2,
        style: 'currency',
        currency: price.currency
    })
</script>

<Card.Root class="box-border relative mb-3 min-h-40 max-h-full">
    <Card.Header class="">
        <Card.Title>
            {name}
        </Card.Title>
        <Card.Description>
            {currFormatter.format(price.room_max_cost)}/night - {currFormatter.format(price.room_min_cost)}/night
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