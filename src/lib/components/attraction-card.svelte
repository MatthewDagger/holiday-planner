<script lang="ts">
    import * as Card from "$lib/components/ui/card";
	import CardFooter from "./ui/card/card-footer.svelte";
    import IconMore from 'virtual:icons/ic/baseline-expand-more';
    import IconLess from 'virtual:icons/ic/baseline-expand-less';

    let {name, description, image, alt} = $props()

    let expanded = $state(false)
</script>

<Card.Root class="box-border relative mb-3 min-h-40 max-h-full">
    <Card.Header class="">
        <Card.Title>
            {name}
        </Card.Title>
        <Card.Description>
            {description}
        </Card.Description>
        <hr/>
        
    </Card.Header>
    <Card.Content class="">
        {#if expanded}
        <img src={image} alt={alt} class="1/3 object-cover"/>

        <p>
            Text
        </p>
        {/if}

        
    </Card.Content>

    <div class="hover:bg-zinc-200 w-full cursor-pointer rounded-b-xl" onclick={() => expanded = !expanded}>
        <CardFooter class="flex items-center justify-center">
            {#if expanded}
            <IconLess />

            {:else}
            <IconMore />
            {/if}

        </CardFooter>

    </div>

</Card.Root>